export type Training = {
  _id: string;
  date: firebase.firestore.Timestamp;
  headcoach: string;
  coaches: string[];
};
