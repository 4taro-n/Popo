import { Session, User } from "@supabase/supabase-js";
import { useRouter, useSegments } from "expo-router";
import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { supabase } from "@/config/supabase";

//supabase
type SupabaseContextProps = {
	user: User | null;
	session: Session | null;
	initialized?: boolean;
	signUp: (email: string, password: string) => Promise<void>;
	signInWithPassword: (email: string, password: string) => Promise<void>;
	signOut: () => Promise<void>;
};

type SupabaseProviderProps = {
	children: React.ReactNode;
};

export const SupabaseContext = createContext<SupabaseContextProps>({
	user: null,
	session: null,
	initialized: false,
	signUp: async () => {},
	signInWithPassword: async () => {},
	signOut: async () => {},
});

export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [initialized, setInitialized] = useState<boolean>(false);

	const segments = useSegments()[0];
	const router = useRouter();

	const signUp = async (email: string, password: string) => {
		const { error } = await supabase.auth.signUp({
			email,
			password,
		});
		if (error) {
			throw error;
		}
	};

	const signInWithPassword = async (email: string, password: string) => {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) {
			throw error;
		}
	};

	const signOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			throw error;
		}
	};

	//tutorial
	const checkTutorialShown = async () => {
		try {
			const hasShownTutorial = await AsyncStorage.getItem('hasShownTutorial');
			return hasShownTutorial !== null;
		} catch (error) {
			console.error("Error reading AsyncStorage:", error);
			return false;
		}
	};

	const markTutorialShown = async () => {
		try {
			await AsyncStorage.setItem('hasShownTutorial', 'true');
		} catch (error) {
			console.error('Error saving to AsyncStorage:', error);
		}
	}

	const resetTutorialShown = async () => {
		try {
			await AsyncStorage.removeItem('hasShownTutorial');
			console.log('Tutorial shown flag has been reset.');
		} catch (error) {
			console.error('Error resetting AsyncStorage:', error);
		}
	};

	useEffect(() => {
		const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
			setSession(session);
			setUser(session ? session.user : null);
			setInitialized(true);
		});
		return () => {
			data.subscription.unsubscribe();
		};
	}, []);




	// useEffect(() => {
	// 	if (!initialized) return;

	// 	if (!session && segments !== "(auth)") {
	// 		router.replace("/(auth)");
	// 	} else if (session && segments !== "(app)") {
	// 		console.log("moved");
	// 		router.replace("/");
	// 	}
	// }, [initialized, session, segments]);


useEffect(() => {
	const navigateAfterLogin = async () => {
		if (!initialized) return;

		if (!session) {
			if (segments !== "(auth)") {
				router.replace("/(auth)"); 
				console.log("got to login");
			}
		} else {
			const tutorialShown = await checkTutorialShown();
			if (!tutorialShown) {
				// チュートリアルページに遷移
				router.replace("/(app)/tutorial"); 
				console.log("go to tutorial");
				// await resetTutorialShown();
				await markTutorialShown();
			} else {
				// メインコンテンツに遷移
				if (segments !== "(app)") {
					console.log("got to map");
					router.replace("/(app)"); // メインページへの遷移
				}
			}
		}
	};
	navigateAfterLogin();
}, [initialized, session, segments]);

	return (
		<SupabaseContext.Provider
			value={{
				user,
				session,
				initialized,
				signUp,
				signInWithPassword,
				signOut,
			}}
		>
			{children}
		</SupabaseContext.Provider>
	);
};
