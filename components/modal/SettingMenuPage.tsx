import React from 'react';
import { Text, View, StyleSheet, Pressable } from "react-native";

type PageProps = {
    setPage: (page: string) => void;
};

const SettingMenuPage: React.FC<PageProps> = ({ setPage }) => {
    return (
        <View style={styles.settingBtnContainer}>
            <Pressable style={styles.settingBtn} onPress={() => setPage('ProfilePage')} >
                <Text style={styles.settingBtn_Text}>プロフィール</Text>
            </Pressable>
            <Pressable style={styles.settingBtn} onPress={() => setPage('AddressPage')} >
                <Text style={styles.settingBtn_Text}>住所登録</Text>
            </Pressable>
            <Pressable style={styles.settingBtn} onPress={() => setPage('NavigationPage')} >
                <Text style={styles.settingBtn_Text}>ナビゲーション設定</Text>
            </Pressable>
            <Pressable style={styles.settingBtn} onPress={() => setPage('PolicyPage')} >
                <Text style={styles.settingBtn_Text}>ポリシー</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
	settingBtnContainer: {
        flex: 1/1.4,
        justifyContent: 'space-around',
    },
    settingBtn: {
        height: 90,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 8,
    },
    settingBtn_Text: {
        fontWeight: '600',
        fontSize: 22,
        marginLeft: 20,
    },
});

export default SettingMenuPage;
