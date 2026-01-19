import { TrackedArray } from "ripple";

export type Context = {
	title: string;
	chats?: TrackedArray<Chat>;
};

export type Chat = {
	title: string;
	messages: Message[];
};

type BaseMessage = {
    sender: "user" | "bot";
    timestamp: Date;
};

export type TextMessage = BaseMessage & {
    type: "text";
    content: string;
};

export type MultipleChoiceMessage = BaseMessage & {
    type: "multiple-choice";
    question: string;
    options: string[];
    answer: number;
    wrong_answer?: number;
};

export type Message = TextMessage | MultipleChoiceMessage;