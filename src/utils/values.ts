export function affirmationFormat(format : string) {
    switch (format) {
        case 'video':
            return 'Video';
        case 'audio':
            return 'Audio';
        default:
            return 'N/A'; // Si el valor es nulo o no coincide
    }
}

export enum PlanType {
    FREEMIUM = 1,
    PREEMIUM = 2, 
}