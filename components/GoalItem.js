import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: 'steelblue',
    margin: 8,
    padding: 8,
    borderRadius: 6,
    justifyContent: 'center',
  },
  goalText: {
    color: '#fff',
  },
});

export default GoalItem;
