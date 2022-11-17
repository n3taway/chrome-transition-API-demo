import { getPageContent, onLinkNavigate } from '../utils.js';

onLinkNavigate(async ({ toPath }) => {
  const content = await getPageContent(toPath);
  console.log('🚧 -> file: script.js。 content: ', content);
  const transition = document.createDocumentTransition();
  
  transition.start(() => {
    document.body.innerHTML = content;  
  });
});
