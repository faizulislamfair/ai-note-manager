export type Note = {
  title: string;
  content: string; // Markdown content
  summary: string; // User-provided summary
  keyPoints: string[]; // User-provided key points
  tags: string[]; // User-provided tags
  sentiment: {
    score: number; // User-provided score (-1 to 1)
    label: "positive" | "negative" | "neutral"; // User-provided label
  };
};


export type SentimentLabel = "positive" | "negative" | "neutral";


export type CreateNoteRequest = Omit<
  Note,
  "_id" | "userId" | "createdAt" | "updatedAt"
>;


export type UpdateNoteRequest = Partial<Note> & {
  _id: string;
};