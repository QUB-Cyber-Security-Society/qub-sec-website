export type Event = {
    id: string;
    title: string;
    date: string;
    type: 'Workshop' | 'Meeting' | 'Competition' | 'Networking';
    description: string;
};

export type SocialLink = {
    name: string;
    icon: React.ElementType;
    url: string;
    description: string;
    color: string;
};