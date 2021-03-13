function resizeDiv () {
    var divWidth = $('#widthValue')[0].value + $('input[name=lengthUnitWidth]:checked').val();
    var divHeight = $('#heightValue')[0].value + $('input[name=lengthUnitHeight]:checked').val();
    $('#result').css({'width': divWidth, 'height': divHeight});
}

resizeDiv();

$('#heightValue').on('change', resizeDiv);

$('#widthValue').on('change', resizeDiv);

$('input[name=lengthUnitHeight]').on('change', resizeDiv);

$('input[name=lengthUnitWidth]').on('change', resizeDiv);