import { Message } from '../types/chat';

export default function ChatMessage({ message }: { message: Message }) {
  return (
    <div
      className={`flex ${
        message.role === 'user' ? 'justify-end' : 'justify-start'
      } mb-4`}
    >
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          message.role === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}