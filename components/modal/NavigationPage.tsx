import React from 'react';
import { Text, View, Pressable, StyleSheet } from "react-native";

type PageProps = {
    setPage: (page: string) => void;
};

const NavigationPage: React.FC<PageProps> = ({ setPage }) => {
    return (
        <View style={styles.navigationBtnContainer}>
        <Pressable style={styles.navigationBtn} >
            <Text style={styles.navigationBtn_Title}>遠回り度</Text>
            <Text style={styles.navigationBtn_Content}>上</Text>
        </Pressable>
        
    </View>
    );
};

const styles = StyleSheet.create({
	navigationBtnContainer: {
        justifyContent: 'space-around',
    },
    navigationBtn: {
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
    },
    navigationBtn_Title: {
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 15,
    },
    navigationBtn_Content: {
        marginRight: 15,
    },
});

export default NavigationPage;
