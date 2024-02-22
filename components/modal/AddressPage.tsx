import React from 'react';
import { Text, View, Pressable, StyleSheet } from "react-native";

type PageProps = {
    setPage: (page: string) => void;
};

const AddressPage: React.FC<PageProps> = ({ setPage }) => {
    return (
        <View style={styles.addressBtnContainer}>
            <Pressable style={styles.addressBtn} >
                <Text style={styles.addressBtn_Title}>自宅</Text>
                <Text style={styles.addressBtn_Content}>岐阜県瑞穂市本田749-1</Text>
            </Pressable>
            <Pressable style={styles.addressBtn} >
                <Text style={styles.addressBtn_Title}>職場</Text>
                <Text style={styles.addressBtn_Content}>岐阜県瑞穂市本田749-1</Text>
            </Pressable>
            <Pressable style={styles.addressBtn} >
                <Text style={styles.addressBtn_Title}>登録地１</Text>
                <Text style={styles.addressBtn_Content}>岐阜県瑞穂市本田749-1</Text>
            </Pressable>
            <Pressable style={styles.addressBtn} >
                <Text style={styles.addressBtn_Title}>登録地２</Text>
                <Text style={styles.addressBtn_Content}>岐阜県瑞穂市本田749-1</Text>
            </Pressable>
            <Pressable style={styles.addressBtn} >
                <Text style={styles.addressBtn_Title}>登録地３</Text>
                <Text style={styles.addressBtn_Content}>岐阜県瑞穂市本田749-1</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
	addressBtnContainer: {
    flex: 1/2,
        justifyContent: 'space-around',
    },
    addressBtn: {
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
    },
    addressBtn_Title: {
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 15,
    },
    addressBtn_Content: {
        marginRight: 15,
    },
});

export default AddressPage;
