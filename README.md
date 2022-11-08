# Getopt generator


---

# EDIT

> Ohhh no one made one because it's too trivial

---

In the rough 13 seconds of me Googling for an online ["getopt generator"](https://www.google.com/search?q=getopt+generator) or ["optstring generator"](https://www.google.com/search?q=optstring+generator) I didn't find one.

Makes sense, web devs don't know how to write C code. /s

---

## `getopt`...?

```
The getopt() function parses the command-line arguments.  Its
       arguments argc and argv are the argument count and array as
       passed to the main() function on program invocation.  An element
       of argv that starts with '-' (and is not exactly "-" or "--") is
       an option element.  The characters of this element (aside from
       the initial '-') are option characters.  If getopt() is called
       repeatedly, it returns successively each of the option characters
       from each of the option elements.
```

Source: https://man7.org/linux/man-pages/man3/getopt.3.html

---

## `optstring` tldr

* `x` - Specify `x`
* `x:` - Specify `x` with required argument
* `x::` - Specify `x` with optional argument

## longopt

```c
struct option {
    const char *name;
    int         has_arg;
    int        *flag;
    int         val;
};
```