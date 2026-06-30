  const weights = {
    Placement: 3,
    Result: 2,
    Event: 1,
};
export function calculatePriority(notification) {

    const weight = weights[notification.Type] || 0;

    const timestamp = new Date(notification.Timestamp).getTime();

    return weight * 1000000000000 + timestamp;
}                      
