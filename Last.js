import React, { useState }from "react";
import { View, Text, StyleSheet } from "react-native";

function Last(){
const [data] = useState([]);

const Last = ({Navigation}) => {
    return(
        <View style={styles.container}>
            data = {json_data.Task}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => (
                <Card style={{ marginTop: 10, padding: 5 }}>
                     <Text style={{ color: 'coral' }}>
                     {`${item.title}`}
                     {`${item.description}`}
                     {`${item.comments}`}
                     </Text>
                     <Text
                     style={{ marginLeft: 5, opacity: 0.6 }}>{`${item.description}`}
                     </Text>
                </Card>
            )}
            <Button title="App" onPress={() => navigation.navigate("Last")}>
            </Button>
        </View>
    )
}
}
export default Last

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
})