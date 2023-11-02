import React, {useState, useEffect} from 'react';
import {SectionList, Text} from 'react-native';

import {FEEDING_LOG_DATA} from '@/mockData';
import RenderLogs from '@/components/feedingLogs/renderLogs';
import sharedStyles from '@/styles/sharedStyles';

const FeedingLogs = ({navigation}) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs(FEEDING_LOG_DATA.feeding_logs);
  }, []);
  console.log('hiii');
  const renderItem = ({item}) => <RenderLogs log={item} />;

  return (
    <SectionList
      style={sharedStyles.container}
      sections={logs}
      renderItem={renderItem}
      keyExtractor={item => item.log_id.toString()}
      renderSectionHeader={({section: {title}}) => (
        <Text style={{color: 'green'}}>{title}</Text>
      )}
      // onEndReached={loadMoreData}
      // onEndReachedThreshold={0.1}
    />
  );
};

export default FeedingLogs;
