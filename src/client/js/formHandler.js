function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/callAPI', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({formText: formText})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
        document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
        document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
        document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
        document.getElementById('score').innerHTML = 'Score: ' + res.score_tag;
    })
}

export { handleSubmit }
