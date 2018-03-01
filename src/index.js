module.exports = function solveEquation(equation) {
    var a, b, c, d, x1, x2;

    someString = equation.toLowerCase();
    correction = "";

    for (i = 0; i < someString.length; i++) {
        if (someString[i] == ' ') continue;
            correction = correction + someString[i];
    }

        a = Number(correction.split('*x^2')[0]);
            correction = correction.split('*x^2')[1];
        b = Number(correction.split('*x')[0]);
            correction = correction.split('*x')[1];
        c = Number(correction);
        d = Math.sqrt(b * b - 4 * a * c);

            x1 = ((-b + d) / (2 * a));
            x2 = ((-b - d) / (2 * a));

        if (x1 < x2)
            return [Math.round(x1), Math.round(x2)];

        return [Math.round(x2), Math.round(x1)];
};
