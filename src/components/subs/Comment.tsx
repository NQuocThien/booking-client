// components/DisqusComments.tsx

import React from "react";
import { DiscussionEmbed, CommentCount } from "disqus-react";

interface DisqusCommentsProps {
  shortname: string;
  identifier: string;
  title: string;
  url: string;
}

const DisqusComments: React.FC<DisqusCommentsProps> = ({
  shortname,
  identifier,
  title,
  url,
}) => {
  const disqusShortname = shortname;
  const disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      {/* You can also include a CommentCount component if needed */}
      {/* <CommentCount shortname={disqusShortname} config={disqusConfig} /> */}
    </div>
  );
};

export default DisqusComments;
