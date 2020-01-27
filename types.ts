export type Training = {
  _id: string;
  date: firebase.firestore.Timestamp;
  headcoach: string;
  coaches: string[];
};

export type Coach = {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};
