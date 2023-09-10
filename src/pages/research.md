# Research

## Overview

- In this page, I highlight my research on how machine learning abd computational models enable
understaning, mapping and predicting cellular biology.
- Before 2018 as part of my AI programm master thesis, I developed **[Deep Packet](https://scholar.google.com/citations?user=NXhouUcAAAAJ&hl=en)**
, the first neural netowrk architecure on network traffic classification and has become one of the seminal paper in the field.
- Papers selected as cover:

<!-- To insert more images, first put them in the static/img folder and then import them as stati/img/img.png -->
<div style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
    <figure>
        <img src="/img/nature-biotech.jpeg" style={{margin: '10px'}} alt="NBT" width='300' height='300'/> 
        <figcaption> <font size="1"> <a href="https://www.nature.com/nbt/volumes/40/issues/1">Lotfollahi et al., Nature Biotechnology (2022)</a>
</font></figcaption>
    </figure>
    <figure>
        <img src="img/morris-lab-cpa.jpg" style={{margin: '10px'}} alt="alt text" width='300' height='300'/>
        <figcaption> <font size="1"> <a href="https://www.embopress.org/toc/17444292/2023/19/6">Lotfollahi et al., Molecular Systems Biology (2023)</a>
        </font></figcaption>
    </figure>
</div>

- See a full list of papers on **[Google Scholar](https://scholar.google.com/citations?user=NXhouUcAAAAJ&hl=en)**.


## Generative AI for Modeling Single-Cell Perturbation

During my doctoral studies, I developed a series of generative AI algorithms to predict out-of-distribution cellular behaviors in response to perturbations (e.g., diseases, drugs, CRISPR KOs). Using these models, one can predict and answer counterfactual questions such as, "What would the gene expression of this cell have looked like if it had been treated differently?"

![Alt text](../img/pert.png?raw=true "Title")

The first approach is called the single-cell generator ([scGen](https://www.nature.com/articles/s41592-019-0494-8)). It models perturbation effects using simple arithmetic in the latent space. Later, we formulated the problem as a distribution matching scenario, known as [trVAE](https://academic.oup.com/bioinformatics/article/36/Supplement_2/i610/6055927), where we aim to move cells from a control distribution to a perturbed condition. 

Finally, during my time at Facebook AI, we developed the composition perturbation autoencoder ([CPA](https://www.embopress.org/doi/full/10.15252/msb.202211517)), which can predict combinatorial perturbations such as drug combinations or double CRISPR KOs. We also extended CPA to predict unseen drugs ([chemCPA](https://proceedings.neurips.cc/paper_files/paper/2022/hash/aa933b5abc1be30baece1d230ec575a7-Abstract-Conference.html)) and to support multiple modalities ([multiCPA](https://www.biorxiv.org/content/10.1101/2022.07.08.499049v1.abstract)). 

In addition to the above, we have written a [perspective](https://www.sciencedirect.com/science/article/pii/S2405471221002027) about the challenges and opportunities in this emerging field.


**scGen predicts single-cell perturbation responses.**

<u>Lotfollahi, M.</u>, Wolf, F. A. & Theis, F. J.


[\[Nature Methods(2019)\]](https://doi.org/10.1038/s41592-019-0494-8),
[\[code\]](https://github.com/theislab/scgen),
[\[press\]](https://www.bioengineering.tum.de/en/news/details/ai-extrapolates-from-mice-to-humans-1).
--- 
**Conditional out-of-distribution generation for unpaired data using transfer VAE.**

<u>Lotfollahi, M.</u>, Naghipourfar, M., Theis, F. J. & Wolf, F. A.

[[Bioinformatics(2020)]](https://doi.org/10.1093/bioinformatics/btaa800),
[\[code\]](https://github.com/theislab/trvae),
[\[talk at ECCB 2020 (21.18% accept rate)\]](https://eccb2020.info/).

---
**Predicting cellular responses to complex perturbations in high‐throughput screens.**

<u>Lotfollahi, M+.</u>, Klimovskaia Susmelj+, A., De Donno, C+., Hetzel, L., Ji, Y., Ibarra, I. L., ... & Theis, F. J.

[[Molecular Systems Biology (2023)]](https://www.embopress.org/doi/full/10.15252/msb.202211517),
[[code]](https://github.com/facebookresearch/CPA),
[[Facebook AI blogpost]](https://ai.facebook.com/blog/ai-predicts-effective-drug-combinations-to-fight-complex-diseases-faster),
[[state of AI report 2021]](https://www.stateof.ai/2021),
[[featured cover]](https://www.embopress.org/loi/17444292).

---
**Predicting single-cell perturbation responses for unseen drugs.**

Hetzel, L., Böhm, S., Kilbertus, N., Günnemann, S., <u>Lotfollahi, M.</u>, & Theis, F. (2022).

[[NeurIPS (2022)]](https://nips.cc/Conferences/2022/ScheduleMultitrack?event=53227), 
[[code]](https://github.com/theislab/chemcpa).

---
**Machine learning for perturbational single-cell omics.**

Ji, Y.,<u> Lotfollahi, M.</u>, Wolf, F. A. & Theis, F. J.

[[Cell Systems(2021)]](https://doi.org/10.1016/j.cels.2021.05.016),
[[data resource]](https://github.com/theislab/sc-pert).

---
**MultiCPA: Multimodal Compositional Perturbation Autoencoder.**
Inecik, K., Uhlmann, A., <u>Lotfollahi, M.\*</u>, & Theis, F\*.

[[ICML Workshop on Computational Biology (WCB) 2022]](https://icml-compbio.github.io/icml-website-2022/),
[[bioRxv]](https://www.biorxiv.org/content/10.1101/2022.07.08.499049v1),
[[code]](https://github.com/theislab/multicpa).


---
**Out-of-distribution prediction with disentangled representations for single-cell RNA sequencing data**

<u>Lotfollahi, M.+</u>, Dony, L.+, Agarwala, H.+, & Theis, F. J.

[[ICML Workshop on Computational Biology (WCB) 2020]](https://icml-compbio.github.io/icml-website-2020/),
[[spotlight talk ICML WCB 2020]](https://slideslive.com/38931310/outofdistribution-prediction-with-disentangled-representations-for-scrnaseq-data),
[[code]](https://github.com/theislab/disent)

## Generative AI for modeling high content Microscopy image

Advancements in high-throughput screening, particularly 
in high-content microscopy, have accelerated drug target identification and mode of 
action studies by allowing the exploration of complex phenotypic data. 
However, scaling these experiments to encompass a wide range of drug or
genetic manipulations is challenging because only a limited number
of compounds exhibit activity in screenings. 
![Alt text](../img/img.png?raw=true "Title")


**Predicting cell morphological responses to perturbations using generative modeling**

To address this, We developed a generative model, the IMage Perturbation Autoencoder (IMPA), which predicts cellular morphological effects of chemical
and genetic perturbations using untreated cells as input.

Palma, A., Theis, F. J.\*, <u>Lotfollahi,M\*</u>.

[[bioRxiv (2023)]](https://www.biorxiv.org/content/10.1101/2023.07.17.549216v1).
[[code]](https://github.com/theislab/impa).


## single-cell reference mapping 

The availability of single-cell reference datasets and mapping algorithms transforms analytical workflows for single-cell sequencing datasets.
These reference atlases are generated with the intention of helping individual labs in the field understand their own data. Single-cell reference mapping address 
the question of how this can be done efficiently and in a reusable fashion enabling information accumulated from multiple prior experiments to help interpret new data.
The ultimate goal is to transition from an expert-centric and tedious pipeline to a rapid, accessible, and accurate procedure for beginners and experts alike.

We introduced the first deep learning algorithm to map single-cell datasets in to pretrained reference building methods called 
single-cell architecture surgery ([scArches](https://www.nature.com/articles/s41587-021-01001-7)).  scArches receives a pretrained model and a query data, and map the query data
to the reference without retraining the reference model. scArches is now widely used by the community to understand the disease, development, in vivo/vitro differences, imputing missing modalities, and transferring cell-type annotations from reference to query by mapping those query datasets on to a reference atlas. We later introduced
[treeArches](https://www.biorxiv.org/content/10.1101/2022.07.07.499109v2) to not just update the reference but also cell-type hierarchies.


![Alt text](../img/ref.png?raw=true "Title")

We extended reference mapping to support multiple data modalities such as RNA/ATAC using 
[Multigrate](https://www.biorxiv.org/content/10.1101/2022.03.16.484643v1.abstract). 
Additionally, we developed [expiMap](https://www.nature.com/articles/s41556-022-01072-x) 
to learn novel gene programs for query datasets. Furthermore, we improved technical aspects by leveraging continuous embeddings with
[scPoli](https://www.google.com/search?q=scpoli&oq=scpoli&aqs=chrome.0.69i59l2j46i10i512j0i10i512l2j69i60l3.1067j0j4&sourceid=chrome&ie=UTF-8)
and using continual learning strategies through [continual surgery](https://icml-compbio.github.io/2022/papers/WCBICML2022_paper_68.pdf).
[scArches repository](https://github.com/theislab/scarches) now serves as a unified framework integrating many applications of single-cell reference mapping including the above.


**Mapping single-cell data to reference atlases by transfer learning**

<u>Lotfollahi, M.</u>, Naghipourfar, M., Luecken, M. D., Khajavi, M., Büttner, M., Wagenstetter, M., Avsec, Ž., Gayoso, A., Yosef, N., Interlandi, M. & Others.

[[Nature Biotechnology (2022)]](https://www.nature.com/articles/s41587-021-01001-7),
[[code]](https://github.com/theislab/scarches),
[[MDSI best paper award]](https://www.mdsi.tum.de/en/mdsi/latest-info/news/full-text/article/awardees-of-the-mdsi-best-paper-of-the-year-award/),
[[featured cover in Nature Biotechnology]](https://www.nature.com/nbt/volumes/40/issues/1).

---
**Single-cell reference mapping to construct and extend cell type hierarchies**

Michielsen,L+.,<u>Lotfollahi, M.+</u>, Strobl, D., Sikkema, L., Reinders, M. J. T., Theis, F. J.,Mahfouz, A. 

[[BioRxv (2022)]](https://www.biorxiv.org/content/10.1101/2022.07.07.499109v1),
[[code]](https://github.com/theislab/scarches).


## Multimodal Modeling of Single-Cell Data

The integration and simultaneous analysis of genomic, epigenomic, transcriptomic, proteomic, and metabolomic data at the single-cell level are revolutionizing our understanding of cell biology in both normal and diseased states. 

![Alt text](../img/mul.png?raw=true "Title")

We have developed two innovative generative models to facilitate this integration:

1. [Multigrate](https://www.biorxiv.org/content/10.1101/2022.03.16.484643v1.abstract): This model enables the integration of partially overlapping single-cell modalities to construct a comprehensive multimodal reference atlas. 
It incorporates single-cell chromatic accessibility, transcriptomics, and surface protein abundance.

2. [mvTCR](https://www.biorxiv.org/content/10.1101/2021.06.24.449733v2.abstract): This model is designed to integrate T-cell receptor sequences with single-cell RNA-seq data.


**Multigrate: Single-Cell Multi-Omic Data Integration.**

<u>Lotfollahi. M+</u>., Litinetskaya, A+. and Theis, F. J.

[[contributed talk Award at ICML Workshop on Computational Biology 2021]](https://icml-compbio.github.io/icml-website-2021/),
[[code]](https://github.com/theislab/multigrate),
[[bioRxv (2022)]](https://www.biorxiv.org/content/10.1101/2022.03.16.484643v1).

---

**Integrating T-cell receptor and transcriptome for large-scale single-cell immune profiling analysis.**

Drost, F., An, Y., Dratva, L. M., Lindeboom, R. G. H., Haniffa, M., Teichmann, S. A., Theis, F., <u>Lotfollahi, M.\*</u>, Schubert, B\*.


[[ICML Workshop on Computational Biology 2021]](https://icml-compbio.github.io/icml-website-2021/2021/papers/WCBICML2021_paper_45.pdf),
[[code]](https://github.com/SchubertLab/mvTCR),
[[bioRxv (2021)]](https://www.biorxiv.org/content/10.1101/2021.06.24.449733v2.abstract).


## Biologically Informed Deep Learning for Single-Cell Genomics

The availability of large-scale single-cell atlases has provided us with detailed insights into cell states. At the same time, advancements in deep learning have facilitated the rapid analysis of query datasets by mapping them into reference atlases. However, the existing data transformations learned by these methods lack interpretability in terms of biologically known concepts such as genes or pathways.

![Alt text](../img/inter.png?raw=true "Title")

To address this limitation, we introduced two methods: expiMap and intercode. These methods embed single-cell data within a biologically meaningful space that captures the activity of gene programs. Additionally, we demonstrate the feasibility of learning novel gene programs using expiMap.

**Biologically Informed Deep Learning to Query Gene Programs in Single-Cell Atlases**

<u>Lotfollahi M</u>, M+., Rybakov, S+., Hrovatin, K., Hediyeh-Zadeh, S., Talavera-López, C., Misharin, A. V., & Theis, F. J.

[[Nature Cell Biology (2023)]](https://icml-compbio.github.io/icml-website-2021/2021/papers/WCBICML2021_paper_45.pdf),
[[code]](https://github.com/theislab/scArches).

---

**Learning Interpretable Latent Autoencoder Representations with Annotations of Feature Sets**

S. Rybakov, <u>M. Lotfollahi</u>, F.J. Theis*, F.A. Wolf*.


[[Machine Learning in Computational Biology (2020)]](https://doi.org/10.1101/2020.12.02.401182),
[[code]](https://github.com/theislab/intercode).


## Population-level integration of single-cell datasets

The increasing generation of population-level single-cell atlases with hundreds or thousands of samples has the potential to link demographic and technical metadata with high-resolution cellular and tissue data in homeostasis and disease. Constructing such comprehensive references requires large-scale integration of heterogeneous 
cohorts with varying metadata capturing demographic and technical information.

![Alt text](../img/pop.png?raw=true "Title")


We introduced, scPoli, scPoli learns both sample and cell representations,
is aware of cell-type annotations and can integrate and annotate newly generated query datasets while 
providing an uncertainty mechanism to identify unknown populations. It can explain sample-level biological and technical variations such as disease, 
anatomical location and assay by means of its novel sample embeddings.

**Population-level integration of single-cell datasets enables multi-scale analysis across samples.**

De Donno, C., Hediyeh-Zadeh, S., Wagenstetter, M., Moinfar, A. A., Zappia, L.,
<u> Lotfollahi, M.* </u>, & Theis, F. J *. 


[[code]](https://github.com/theislab/scArches),
[[bioRxv (2022)]](https://www.biorxiv.org/content/10.1101/2022.11.28.517803v1).
