import React from "react";

const PrivateRouter = () => {
  return <div>Bu gorunmur</div>;
};

export default PrivateRouter;

/** bu privetedir 
 * Özel Klasörler devamı

UI mantığını yönlendirme mantığından ayırmak için
Proje genelinde dahili dosyaları tutarlı bir şekilde düzenlemek için
Kod düzenleyicilerde dosyaları sıralamak ve gruplandırmak için
Ve son olarak, gelecekteki Next.js dosya adlandırma kurallarıyla olası adlandırma çakışmalarından kaçınmak için
Eğer URL segmentlerinde alt çizgi (_) kullanmak istiyorsanız, klasör adını "%5F" ile öne ekleyebilirsiniz; bu, bir alt çizginin URL kodlu halidir.
 */
