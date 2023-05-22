import React, { ChangeEvent, FC, useCallback, useMemo, useState } from "react";
import { Button } from "components_new/button";
import { SizeButton, VariantButton } from "components_new/button/utils";
import { Input } from "components_new/input";
import { SizeInput, VariantInput } from "components_new/input/utils";
import { IconComponent } from "./iconItem/iconItem";
import { iconsInfo } from "./iconInfo";
import styles from "./icons.module.scss";

interface IExample {
  name: string;
  path: string;
}

const namesOfAllIcon: string[] = [...Object.keys(iconsInfo)];

export const Icons: FC = () => {
  const [iconInfo, setIconInfo] = useState<IExample>({
    name: "NameIcon",
    path: "...",
  });
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
    setIconInfo({ name: "NameIcon", path: "..." });
  };

  const filter = useMemo(() => {
    if (!search) {
      return namesOfAllIcon;
    }

    return namesOfAllIcon.filter(
      (item: string) =>
        item.toLowerCase().includes(search.toLowerCase()) ||
        iconsInfo[item].size.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleExample = useCallback(({ name, path }: IExample): void => {
    setIconInfo({
      name,
      path,
    });
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.searchContainer}>
          <Input
            variant={VariantInput.Search}
            size={SizeInput.searchM}
            type="text"
            value={search}
            onChange={handleSearch}
          />
          <Button
            variant={VariantButton.Primary}
            size={SizeButton.M}
            onClick={clearSearch}
            otherClass={styles.buttonClear}
          >
            X
          </Button>
        </div>
        <div className={styles.example}>
          <div className={styles.exampleImport}>
            {`import { ReactComponent as ${iconInfo.name}Icon } from '${iconInfo.path}';`}
          </div>
          <div className={styles.exampleUse}>{`<${iconInfo.name}Icon />`}</div>
        </div>
      </div>
      <div className={styles.iconsList}>
        {filter.map((item: string) => (
          <li
            className={styles.iconCard}
            onClick={() =>
              handleExample({
                name: iconsInfo[item].publicName,
                path: iconsInfo[item].path,
              })
            }
            key={item}
          >
            <div className={styles.iconImg}>
              <IconComponent name={item} />
            </div>
            <div className={styles.iconName}>{iconsInfo[item].publicName}</div>
            <div className={styles.iconSize}>{iconsInfo[item].size}</div>
          </li>
        ))}
      </div>
    </div>
  );
};
