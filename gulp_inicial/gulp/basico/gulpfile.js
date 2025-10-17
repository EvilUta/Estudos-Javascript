const gulp = require('gulp')
const { series, parallel } = gulp

const antes1 = cb => {
    console.log('Tarefa Antes 1 !')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2 !')
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim !')
    return cb()
}

function copiar(cb){

    // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
        gulp.src('pastaA/**/*.txt')
        // .pipe(imagePelaMetade())
        // .pipe(imageEmpretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB'))
    return cb()
}

module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim
)