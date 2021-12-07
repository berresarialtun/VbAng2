import { Comment } from "../comment.model";
import { Course } from "../course.model";

export const CourseList: Course[] = [
    new Course(1,
        'https://via.placeholder.com/150', 'Angular Eğitimi', 'Türkay Ürkmez', 4.8, 1, [
        new Comment(1, 'Faydalı bir eğitimdi'),
        new Comment(2, 'Eğlenceliydi!'),

    ]
    ),

    new Course(2,
        'https://via.placeholder.com/150', 'ASP.NET Core ile MVC Eğitimi', 'Türkay Ürkmez', 4.9, 1, [
        new Comment(1, 'Faydalı bir eğitimdi'),
        new Comment(2, 'Eğlenceliydi!'),

    ]
    ),

    new Course(3,
        'https://via.placeholder.com/150', 'Yaşam boyu koçluk', 'Deniz Hüsrev', 4.8, 2, [
        new Comment(1, 'Faydalı bir eğitimdi'),
        new Comment(2, 'Eğlenceliydi!'),

    ]
    )

];