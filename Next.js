import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Button } from "react-native-paper";

function Next(){
const [data] = useState([]);

const Next = ({Navigation}) => {
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
            {/* <Button title="Learn" onPress={() => navigation.navigate("Next")}>
            </Button> */}
        </View>
    )
}
}

export default Next

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
})