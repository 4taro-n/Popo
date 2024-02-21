import React from 'react';
import { Text, View, Button as Btn } from "react-native";

const IndexPage = ({ setPage }) => {
    return (
        <View>
            <Text>Page 1</Text>
            <Btn title="Go to Page 2" onPress={() => setPage('page2')} />
            {/* <Btn onPress={() => navigateAndCloseModal("/(app)/usersetting")} title="設定へ移動" /> */}
        </View>
    );
};

export default IndexPage;
