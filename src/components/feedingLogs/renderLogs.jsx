import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@/constants';

const RenderLogs = ({log}) => {
  const {navigate} = useNavigation();
  const {type, duration_minutes, notes, log_id} = log;
  return (
    <TouchableOpacity
      onPress={() => navigate(routes.FEEDING_LOG, {id: log_id})}>
      <Text>{type}</Text>
      {duration_minutes && <Text>{duration_minutes}</Text>}
      <Text>{notes}</Text>
      {/* Add more UI components for displaying log details */}
    </TouchableOpacity>
  );
};

export default RenderLogs;
