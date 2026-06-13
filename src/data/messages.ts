export interface Message {
  senderId: number;
  receiverId: number;
  text: string;
  time: string;
}

export const messages: Message[] = [
  {
    senderId: 1,
    receiverId: 2,
    text: "Hi Ana, I saw your UI/UX projects. They look great!",
    time: "11:24 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    text: "Thank you Marko! Nice to connect with you.",
    time: "11:30 AM",
  },
  {
    senderId: 4,
    receiverId: 2,
    text: "Hi Ana, would you like to collaborate on a new web app?",
    time: "09:15 AM",
  },
];