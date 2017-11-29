// @flow

export type Cover = {
  title: string,
  description: string,
  specsHTML: string,
  dDocName: string,
  terms: array<string>,
  grades: array<{name: string, image: string}>};

export type MenuGrandChild = {
  name: string,
  id: number
}

export type MenuChild = {
  name: string,
  id: number,
  termParent: number,
  VocabId: number,
  children: array<MenuGrandChild>
}

export type MenuCategory = {
  name: string,
  description: string,
  children: array<MenuChild>
}

export type TopMenu = {
  name: string,
  path: string,
  children: array<MenuCategory>
}

// telling flow that module is an objet with a propertly called hot. And one function called accept
// The accept function takes to params: string and callback. The callback has no prarms and returns void. The accept function also returns void
declare var module: {
    hot: {
        accept(path: string, callback: () => void): void;
    }
};
