# Portfolio Management
- Entities and their Components:
  - Education: thing, article, skills, education-stats
  - Certification: thing, article, skills, certification-stats
  - Experience: thing, article, skills, experience-stats
  - Personal Project: thing, article, skills, project-stats

- Component Fields:
  - thing:
    - name: string
    - type: "Education" || "Certification" || "Experience" || "Project"
    - display: string
  - article:
    - An array containing any number of strings. Strings are prepended by the type of article
      section represented.
    - Text Section: "TEXT: ..."
    - Image Section: "IMAGE: ..."
  - skills:
    - An array containing any number of strings. Strings are ordered by their importance
      to the entity.