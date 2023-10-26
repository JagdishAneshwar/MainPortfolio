import React from 'react'

export default function AddProject() {
  return (
    <div>
      <div class="container">
        <div class="form-container">
            <form>
                <div class="form-group">
                    <label for="projectName">Project Name</label>
                    <input type="text" class="form-control" id="projectName" placeholder="Enter project name" />
                </div>
                <div class="form-group">
                    <label for="projectDescription">Project Description</label>
                    <textarea class="form-control" id="projectDescription" rows="3"
                        placeholder="Enter project description"></textarea>
                </div>
                <div class="form-group">
                    <label for="date">Date</label>
                    <input type="date" class="form-control" id="date" />
                </div>
                <div class="form-group">
                    <label for="features">Features</label>
                    <input type="text" class="form-control" id="features" placeholder="Enter features" />
                </div>
                <div class="form-group">
                    <label for="technology">Technology</label>
                    <input type="text" class="form-control" id="technology" placeholder="Enter technology" />
                </div>
                <div class="form-group">
                    <label for="webpageLink">Webpage Link</label>
                    <input type="text" class="form-control" id="webpageLink" placeholder="Enter webpage link" />
                </div>
                <div class="form-group">
                    <label for="gitRepoLink">Git Repository Link</label>
                    <input type="text" class="form-control" id="gitRepoLink" placeholder="Enter Git repo link" />
                </div>
                <div class="form-group">
                    <label for="mediumArticleLink">Medium Article Link</label>
                    <input type="text" class="form-control" id="mediumArticleLink"
                        placeholder="Enter Medium article link" />
                </div>
                <div class="form-group">
                    <label for="projectImage">Project Image</label>
                    <input type="file" class="form-control-file" id="projectImage" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>

    </div>
  )
}
