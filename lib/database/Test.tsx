import { supabase } from "@/config/supabase"; // supabaseClientの設定は適宜読み替えてください

const insertTestData = async (textValue: any) => {
    const { data, error } = await supabase
        .from('Test')
        .insert([
        { text: textValue },
    ]);

    if (error) {
        console.error('データ挿入エラー', error);
    } else {
        console.log('挿入されたデータ', data);
    }
};


const fetchTestData = async () => {
    const { data, error } = await supabase
        .from('Test')
        .select('*');

    if (error) {
        console.error('データの読み出しエラー', error);
    } else {
        console.log('取得されたデータ', data);
    }
};

export {insertTestData, fetchTestData};