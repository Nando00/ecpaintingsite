import React from "react";
import Link from "next/link";
import Text from "common/components/Text";
import CopyrightWrapper from "./copyright.style";

import { socialProfile } from "common/data/Interior";

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {socialProfile.map((profile, index) => (
          <li key={`profile_key_${index}`}>
            <Link href={`${profile.link}`}>
              <i className={profile.icon} />
            </Link>
          </li>
        ))}
      </ul>
      <Text content="copyrights 2024 @Lopez" />
    </CopyrightWrapper>
  );
};

export default Copyright;
