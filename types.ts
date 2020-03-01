type TrainingCoach = {
  coachId: Coach['_id'];
  role: 'support' | 'headcoach' | null;
};

export type Training = {
  _id: string;
  date: firebase.firestore.Timestamp;
  coaches: TrainingCoach[];
};

export type Coach = {
  _id?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};
