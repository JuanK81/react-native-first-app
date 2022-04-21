import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: 'steelblue',
    margin: 8,

    borderRadius: 6,
    justifyContent: 'center',
  },
  pressed: {
    opacity: .5,
  },
  goalText: {
    padding: 8,
    color: '#fff',
  },
});

export default GoalItem;
