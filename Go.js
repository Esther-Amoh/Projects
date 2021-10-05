import React, { useState }from "react";
import { View, Text, StyleSheet } from "react-native";

function Go(){
const [data] = useState([]);

const Go = ({Navigation}) => {
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
            <Button title="Recipe" onPress={() => navigation.navigate("Go")}>
            </Button>
        </View>
    )
}
}
export default Go

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
})