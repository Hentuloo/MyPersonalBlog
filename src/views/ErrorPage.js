import React from 'react';
import PostTemplates from 'templates/PostTemplates';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Headline from 'components/atoms/Headline/Headline';

function ErrorPage() {
  return (
    <div>
      <PostTemplates
        contentPageSEO="Błąd wyszukiwania"
        keywordsSEO="Błąd wyszukiwania"
        pageTitle="Błąd wyszukiwania"
      >
        <article>
          <Headline black as="h1">
            BŁĄD: coś poszło nie tak!
          </Headline>
          <Paragraph blue center>
            Spróbuj powrócić do poprzedniej strony klikając w przeglądarce znaczek powrót lub
            skorzystaj z menu tej strony powracając do strony głównej
          </Paragraph>
        </article>
      </PostTemplates>
    </div>
  );
}
export default ErrorPage;
