import React from 'react';
import { Text, View, Button as Btn } from "react-native";

type PageProps = {
    setPage: (page: string) => void;
};

const IndexPage: React.FC<PageProps> = ({ setPage }) => {
    return (
        <View>
            <Text>index page</Text>
            <Btn title="設定" onPress={() => setPage('SettingMenuPage')} />
            {/* <Btn onPress={() => navigateAndCloseModal("/(app)/usersetting")} title="設定へ移動" /> */}
        </View>
    );
};

export default IndexPage;
