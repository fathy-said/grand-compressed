const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

// مهمة لضغط CSS
gulp.task('minify-css', () => {
    return gulp.src('../css/*.css') // مسار ملفات CSS الأصلية
        .pipe(cleanCSS({ compatibility: 'ie8' })) // خيار التوافق
        .pipe(gulp.dest('../new-css')); // مسار الخروج للملفات المضغوطة
});

// المهمة الافتراضية
gulp.task('default', gulp.series('minify-css'));