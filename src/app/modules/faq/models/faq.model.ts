export interface FaqItemsResponse {
    items: FaqItem[];
}

export interface FaqItem {
    question: string;
    answer: string;
}