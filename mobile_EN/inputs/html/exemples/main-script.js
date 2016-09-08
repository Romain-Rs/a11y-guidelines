/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
$(document).ready(function() {
	$(function () {
        $('<a>',{
            'text': 'Retour',
            'aria-label': 'Retour à la liste des exemples',            
            'href': '../../exemples.html',
            'class': "return-button"
        }).prependTo('body');
    });
});