import React from 'react';
import { Text, View, Button as Btn } from "react-native";

type PageProps = {
    setPage: (page: string) => void;
};

const PolicyPage: React.FC<PageProps> = ({ setPage }) => {
    return (
        <View>
            <Text>policy page</Text>
        </View>
    );
};

export default PolicyPage;
