import Yup from "yup";

export const createCategorySchema = Yup.object().shape({
    name: Yup.string("Le nom doit etre valide").required("Le nom est obligatoire"),
    description: Yup.string("La description doit etre valide"),
});

export const updateCategorySchema = Yup.object().shape({
    id: Yup.string("L'ID doit etre valide"),
    name: Yup.string("Le nom doit etre valide").required("Le nom est obligatoire"),
    description: Yup.string("La description doit etre valide"),
});

export const deleteCategorySchema = Yup.object().shape({
    id: Yup.string("L'ID doit etre valide"),
});

export const getByCategorySchema = Yup.object().shape({
    id: Yup.string("L'ID doit etre valide"),
});