/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Inbox: {
            screens: {
              InboxScreen: 'InboxScreen',
            },
          },
          Phonebook: {
            screens: {
              PhonebookScreen: 'PhonebookScreen',
            },
          },
          Diary: {
            screens: {
              DiaryScreen: 'DiaryScreen',
            },
          },
          Explore: {
            screens: {
              ExploreScreen: 'ExploreScreen',
            },
          },
          User: {
            screens: {
              UserScreen: 'UserScreen',
            },
          }
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
