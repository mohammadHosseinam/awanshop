export function TimeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now - date) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInMonths / 12);

    if (diffInSeconds < 60) {
        return 'چند ثانیه پیش';
    } else if (diffInMinutes < 60) {
        return diffInMinutes === 1 ? 'یک دقیقه پیش' : `${diffInMinutes} دقیقه پیش`;
    } else if (diffInHours < 24) {
        return diffInHours === 1 ? 'یک ساعت پیش' : `${diffInHours} ساعت پیش`;
    } else if (diffInDays < 30) {
        return diffInDays === 1 ? 'دیروز' : `${diffInDays} روز پیش`;
    } else if (diffInMonths < 12) {
        return diffInMonths === 1 ? 'یک ماه پیش' : `${diffInMonths} ماه پیش`;
    } else {
        return diffInYears === 1 ? 'یک سال پیش' : `${diffInYears} سال پیش`;
    }
}
