export interface Student {
    id: number;
    studentId: string;
    lastname: string;
    firstname: string;
    courseName: string;
    dateEnrolled: string;
}

export interface StudentInsert{
    id: number;
    studentId: string;
    lastname: string;
    firstname: string;
    courseId: number;
    dateEnrolled: string;
}