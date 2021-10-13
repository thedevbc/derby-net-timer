var new_port = function () {
    console.log('new_port');
}

var probe_for_timer = function () {
    console.log('probe_for_timer');
}
var hostUrl = '';
var hostPass = 'doyourbest';
var hostRole = 'timer'
var hostUrlInput = document.querySelector('#host-url');
var hostPassInput = document.querySelector('#host-password');
var hostRoleSelector = document.querySelector('#role-select');

var connect = function (event) {
    event.preventDefault();
    event.stopPropagation();
    // console.log(event);
    hostPass = hostPassInput.value || hostPass;
    hostUrl = hostUrlInput.value;
    hostRole = hostRoleSelector.value;
    console.log({hostPass});
    console.log({hostUrl});
    console.log({hostRole});
}