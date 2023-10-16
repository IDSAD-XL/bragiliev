import { IFilesWithPreview } from '../../hooks/useFileinput'

const postURL = 'https://grandmed.ru/ajax/send-form.php'

export interface IRegFormDTO {
  name: string
  number: string
  date?: string
  comment?: string
  files?: IFilesWithPreview[]
}

export async function postForm(formDTO: IRegFormDTO) {
  console.log(formDTO)
  const formData = new FormData()
  formData.append('form_text_1', formDTO.name)
  formData.append('form_text_2', formDTO.number)

  let comment = formDTO.comment
  if (formDTO.date) {
    comment += ' ' + formDTO.date
  }
  if (comment) {
    formData.append('form_textarea_6', comment)
  }
  if (formDTO.files) {
    for (let i = 0; i <= formDTO.files.length; i++) {
      if (formDTO.files[i]) {
        formData.append(`files[${i}]`, formDTO.files[i].file)
      }
    }
  }

  const resp = await fetch(postURL, {
    method: 'post',
    body: formData,
  })

  console.log(resp)
}
