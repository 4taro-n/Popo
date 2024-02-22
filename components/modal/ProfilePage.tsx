import React from 'react';
import { Text, View, Pressable, StyleSheet } from "react-native";

type PageProps = {
    setPage: (page: string) => void;
};

const ProfilePage: React.FC<PageProps> = ({ setPage }) => {
    return (
        <View style={styles.profileBtnContainer}>
            <Pressable style={styles.profileBtn} >
                <Text style={styles.profileBtn_Title}>ユーザー名</Text>
                <Text style={styles.profileBtn_Content}>山田たろう</Text>
            </Pressable>
            <Pressable style={styles.profileBtn} >
                <Text style={styles.profileBtn_Title}>身長</Text>
                <Text style={styles.profileBtn_Content}>山田たろう</Text>
            </Pressable>
            <Pressable style={styles.profileBtn} >
                <Text style={styles.profileBtn_Title}>体重</Text>
                <Text style={styles.profileBtn_Content}>山田たろう</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
	profileBtnContainer: {
        flex: 1/3.6,
        justifyContent: 'space-around',
    },
    profileBtn: {
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
    },
    profileBtn_Title: {
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 15,
    },
    profileBtn_Content: {
        marginRight: 15,
    },
});

export default ProfilePage;
