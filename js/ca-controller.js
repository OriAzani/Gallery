var projects;

$(document).ready(function initPage() {
    projects = getProjs()
    renderProjects()
    renderModals()
});


function renderProjects() {
    var strProjHtmls = projects.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${proj.pic}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.desc}</p>
        </div>
      </div>`
    })
    var projContent = strProjHtmls.join('')
    var $elProjContainer = $('.proj-container')
    $elProjContainer.html(projContent)
}

function renderModals() {
    var strModalsHtmls = projects.map(function (proj) {
        return `<div class="portfolio-modal modal fade" id="portfolioModal${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                  <div class="lr">
                    <div class="rl"></div>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8 mx-auto">
                      <div class="modal-body">
                        <!-- Project Details Go Here -->
                        <h2>${proj.name}</h2>
                        <p class="item-intro text-muted">${proj.title}</p>
                        <img class="img-fluid d-block mx-auto" src="${proj.pic}" alt="">
                        <p>Project Description:<br> ${proj.desc}<br> <a href="${proj.url}">Link to the Project</a></p>
                        <ul class="list-inline">
                          <li>Date: ${proj.date}</li>
                          <li>Client: ${proj.client}</li>
                          <li>Category: ${proj.category}</li>
                        </ul>
                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                            <i class="fa fa-times"></i>
                            Close Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>`
    })
    var projModal = strModalsHtmls.join('')
    var $elModalContainer = $('.modal-container')
    $elModalContainer.html(projModal)
}


function onSubmit(){
var $elEmail = $('#exampleFormControlInput1').val()
var $elSubject = $('#exampleFormControlInput1').val()
var $elMessage = $('#exampleFormControlTextarea1').val()
console.log($elEmail , $elMessage ,  $elSubject)
window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${$elEmail}&su=${$elSubject}&body=${$elMessage}`)
}

