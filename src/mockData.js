export const BABY_DATA = {
  baby_id: 1,
  baby_name: 'Emma',
  birthdate: '2023-05-10',
  parents: {
    mother: 'Alice',
    father: 'Bob',
  },
  avatar: 'something',
};
export const FEEDING_LOG_DATA = {
  baby_id: 1,
  next_page: true,
  page: 1,
  feeding_logs: [
    {
      title: '2023-05-11',
      data: [
        {
          log_id: 101,
          timestamp: '2023-05-11T09:00:00',
          type: 'Breastfeeding',
          duration_minutes: 15,
          notes: 'Emma fed well, slept afterward.',
        },
        {
          log_id: 102,
          timestamp: '2023-05-11T12:30:00',
          type: 'Bottle Feeding',
          duration_minutes: 20,
          notes: 'Emma took the entire bottle.',
        },
        {
          log_id: 103,
          timestamp: '2023-05-11T15:45:00',
          type: 'Solid Food',
          notes: 'Emma tried mashed peas for the first time.',
        },
      ],
    },
    {
      title: '2023-05-12',
      data: [
        {
          log_id: 104,
          timestamp: '2023-05-12T08:15:00',
          type: 'Breastfeeding',
          duration_minutes: 20,
          notes: 'Emma was hungry this morning.',
        },
      ],
    },
  ],
};
