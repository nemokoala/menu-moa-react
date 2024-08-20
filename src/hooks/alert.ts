import Swal from "sweetalert2";

export async function showErrorAlert(text: string) {
  const result = await Swal.fire({
    title: "오류!",
    text: text,
    icon: "error",
    confirmButtonText: "확인",
    allowOutsideClick: false,
  });

  return result;
}

export async function showWarningAlert(text: string) {
  const result = await Swal.fire({
    title: "경고!",
    text: text,
    icon: "warning",
    confirmButtonText: "확인",
    allowOutsideClick: false,
  });

  return result;
}

export async function showConfirmDialog(text: string) {
  const result = await Swal.fire({
    title: "🥺",
    text: text,
    icon: "question",
    confirmButtonText: "삭제",
    cancelButtonText: "취소",
    showCancelButton: true,
    allowOutsideClick: false,
  });

  return result;
}

export async function showQuestionDialog(text: string) {
  const result = await Swal.fire({
    title: "",
    text: text,
    icon: "question",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
    showCancelButton: true,
    allowOutsideClick: false,
  });

  return result;
}

export async function showSuccessAlert(text: string) {
  const result = await Swal.fire({
    title: "성공!",
    text: text,
    icon: "success",
    confirmButtonText: "확인",
    allowOutsideClick: false,
  });

  return result;
}
